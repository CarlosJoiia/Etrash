import {
  Container,
  Form,
  FormTitle,
  Section,
  MapContainer,
  CategoryContainer,
  CategoryBox,
  CategoryImage,
  ButtonContainer,
  Button,
} from "./styles";
import Input from "../../components/Input";
import { useState } from "react";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import { TileLayer, Marker, useMapEvents, Popup } from "react-leaflet";
import { categories } from "./categories";
import useGetLocation from "../../hooks/useGetLocation";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ObLocal from "../Localizacao";
import Joyride from "react-joyride";

export default function New() {
  const [formsValues, setFormValues] = useState({
    name: "",
    description: "",
    contact: "",
    cnpj: "",
    email: "",
    senha: "",
    category: "",
    coords: [0, 0],
    option: "",
    status: "NaoVerificado",
  });

  const history = useHistory();

  const { coords } = useGetLocation();

  if (!coords) {
    return <ObLocal />;
  }

  function LocationMarker() {
    const [position, setPosition] = useState<LatLngExpression | null>(null);

    const map = useMapEvents({
      click() {
        map.addEventListener("click", (event: LeafletMouseEvent) => {
          setFormValues((prev) => ({
            ...prev,
            coords: [event.latlng.lat, event.latlng.lng],
          }));
        });
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position || coords || [-23.55052, -46.633308]}>
        <Popup>Você Está Aqui </Popup>
      </Marker>
    );
  }
  async function onSubmit() {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const cnpj = formsValues.cnpj.replace(/\D/g, "");
      const cnpjAsNumber = parseFloat(cnpj);
      const Options = formsValues.category;

      if (Options !== "PessoaFisica") {
        if (formsValues.coords[0] !== 0) {
          const request = await fetch(URL + Options, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formsValues.name,
              description: formsValues.description,
              contact: formsValues.contact,
              cnpj: cnpjAsNumber,
              email: formsValues.email,
              senha: formsValues.senha,
              category: formsValues.category,
              latitude: formsValues.coords[0],
              longitude: formsValues.coords[1],
              status: formsValues.status,
            }),
          });

          const data = await request.json();
          if (request.ok) {
            toast(data.mensagem, {
              type: "success",
              autoClose: 4000,
            });
            history.push({
              pathname: "/ValidarEmail",
              state: { email: formsValues.email, option: Options },
            });
            setTimeout(() => window.location.reload(), 4500);
          } else {
            toast(data.mensagem, {
              type: "error",
              autoClose: 8000,
            });
          }
        } else {
          toast("Coloque o Maker no Mapa", {
            type: "error",
            autoClose: 8000,
          });
        }
      } else {
        const request = await fetch(URL + Options, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formsValues.name,
            contact: formsValues.contact,
            email: formsValues.email,
            senha: formsValues.senha,
            category: formsValues.category,
            status: formsValues.status,
          }),
        });

        const data = await request.json();
        if (request.ok) {
          toast(data.mensagem, {
            type: "success",
            autoClose: 4000,
          });
          history.push({
            pathname: "/ValidarEmail",
            state: { email: formsValues.email, option: Options },
          });
          setTimeout(() => window.location.reload(), 4500);
        } else {
          toast(data.mensagem, {
            type: "error",
            autoClose: 8000,
          });
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar formulário.");
    }
  }

  const Steps = [
    {
      target: "#category",
      content: "Selecione o Tipo do Cadastro Para Continuar",
      disableBeacon: true,
      Placement: "left",
      spotlightClicks: true,
      disableSkipButton: true, // Desativa o botão "Skip" apenas para este passo
      disableCloseOnEsc: true,
      disableOverlayClose: true,
    },
    {
      target: "#key",
      content: "Preencha os Dados Necessarios2",
    },
    {
      target: "#input",
      content: "Preencha os Dados Necessarios",
    },
    {
      disable:
        formsValues.category === "" || formsValues.category === "PessoaFisica",
      target: "#map",
      content: "Clique no local aonde deseja colocar o Maker",
    },
    {
      target: "#button",
      content: "E Confirme seu Cadastro",
    },
    {
      target: "#Forms",
      content: "Comece seu Cadastro Agora!!",
    },
  ];

  return (
    <Container>
      <Joyride
        steps={Steps}
        run={true}
        continuous={true}
        showSkipButton={true}
        scrollDuration={1000}
        styles={{
          options: {
            zIndex: 10000,
            arrowColor: "#fff",
            backgroundColor: "#F0F0F5",
            primaryColor: "#3CB371",
            textColor: "#000000",
          },
          tooltip: {
            borderRadius: 4,
            padding: 12,
            fontSize: 20,
            textAlign: "left",
            maxWidth: 500,
          },
          buttonNext: {
            display: formsValues.category !== "" ? "block" : "none", // Exibe o botão "Next" apenas quando uma categoria for selecionada
          },
          buttonClose: {
            display: "none", // Oculta o botão "Fechar" por padrão
          },
          buttonSkip: {
            display: formsValues.category !== "" ? "block" : "none", // Exibe o botão "Skip" por padrão
          },
        }}
      />

      <Form
        id="Forms"
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit();
        }}
      >
        <FormTitle>Cadastro da Cooperativa</FormTitle>

        <Section>Categoria</Section>
        <CategoryContainer id="category">
          {categories.map((category) => (
            <CategoryBox
              key={category.key}
              onClick={() => {
                setFormValues((prev) => ({
                  ...prev,
                  category: category.key,
                }));
                setFormValues((prev) => ({ ...prev, option: category.key }));
              }}
              isActive={formsValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>

        <Section>Dados</Section>

        <section id="input">
          <Input
            label={
              formsValues.category === "PessoaFisica"
                ? "Nome da Pessoa"
                : "Nome do Local"
            }
            name="name"
            type="text"
            value={formsValues.name}
            mask=""
            onChange={setFormValues}
          />
          {formsValues.category !== "PessoaFisica" && (
            <Input
              label="Descrição"
              name="description"
              type="text"
              value={formsValues.description}
              mask=""
              onChange={setFormValues}
            />
          )}
          <Input
            label="Contato"
            name="contact"
            type="text"
            value={formsValues.contact}
            mask="+55 (99) 9 9999-9999"
            onChange={setFormValues}
          />
          {formsValues.category !== "PessoaFisica" && (
            <Input
              label="CNPJ"
              name="cnpj"
              type="text"
              value={formsValues.cnpj}
              mask="99.999.999/9999-99"
              onChange={setFormValues}
            />
          )}

          <Input
            label="Email"
            name="email"
            type="email"
            value={formsValues.email}
            mask=""
            onChange={setFormValues}
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={formsValues.senha}
            mask=""
            onChange={setFormValues}
          />
        </section>

        {formsValues.category !== "PessoaFisica" && (
          <>
            <Section>Endereço</Section>

            <MapContainer
              id="map"
              center={{ lat: coords[0], lng: coords[1] } as LatLngExpression}
              zoom={50}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={
                  [
                    formsValues.coords[0],
                    formsValues.coords[1],
                  ] as LatLngExpression
                }
              >
                <Popup>Você Está Aqui </Popup>
              </Marker>
              <LocationMarker />
            </MapContainer>
          </>
        )}

        <ButtonContainer id="button">
          <Button type="submit">Confirmar Cadastro</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
