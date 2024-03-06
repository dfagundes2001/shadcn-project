import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import TripBro from "../assets/Trip-bro.svg";
import TripCuate from "../assets/Trip-cuate.svg";
import TripPana from "../assets/Trip-pana.svg";


export function Signin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <main className="flex h-screen w-full">
      <div className="bg-primary-foreground flex w-full h-full p-16">
        <Carousel
          className="w-full max-w-xl"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            <CarouselItem className="h-35 flex justify-center items-center">
              <div className="max-h-80 w-80 bg-background rounded p-8">
                <img src={TripBro} alt="Imagem de Viagem"/>
              </div>
            </CarouselItem>
            <CarouselItem className="h-35 flex justify-center items-center">
              <div className="max-h-80 w-80 bg-background rounded p-8">
                <img src={TripCuate} alt="Imagem de Viagem"/>
              </div>
            </CarouselItem>
            <CarouselItem className="h-35 flex justify-center items-center">
              <div className="max-h-80 w-80 bg-background rounded p-8">
                <img src={TripPana} alt="Imagem de Viagem"/>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className="bg-background flex items-center justify-center h-full w-full max-w-3xl p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu email e senha ou GitHub para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">E-mail</Label>
              <Input
                id="password"
                placeholder="Sua senha secreta"
                type="password"
              />
            </div>
            <Button className="mt-4 mb-2 w-full">Entrar</Button>
            <div className="flex items-center gap-6">
              <Separator />
              <span className="text-xs text-muted-foreground">OU</span>
              <Separator />
            </div>
            <Button variant="outline" className="mt-2 w-full">
              <GitHubLogoIcon className="mr-2" /> Entrar com GitHub!
            </Button>
          </CardContent>
          <CardFooter className="text-muted-foreground text-center text-sn">
            Ao entrar em nossa plataforma você concorda com nossos termos de Uso
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
