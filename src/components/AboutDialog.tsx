import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AboutDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='text-MyBrown font-medium'>więcej</button>
      </DialogTrigger>
      <DialogContent className='m:max-w-[600px] dark:bg-myDarkSemiGray'>
        <DialogHeader>
          <DialogTitle>O nas</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <p className='text-justify dark:text-white overflow-y-scroll h-[400px] px-4 '>
          Hebel Mebel – meble z duszą, tworzone z serca, z prawdziwego drewna.
          <br />
          <br />
          Jesteśmy rodzinną pracownią stolarską – ojciec i syn, którzy razem tworzą coś wyjątkowego. W Hebel Mebel
          łączymy tradycyjne rzemiosło z prawdziwą pasją do litego drewna. <br />
          <br /> Nasze meble to nie tylko ładne przedmioty – to rzeczy, które przetrwają lata i pokolenia. Każdy mebel
          to dla nas osobna historia – zaczyna się od kawałka dębu, buku czy jesionu, a kończy w Twoim domu, nadając mu
          niepowtarzalny charakter. <br />
          <br />
          Każdy etap powstawania mebla – od koncepcji, przez ręczną pracę, aż po finalne wykończenie – wykonujemy sami,
          z troską o każdy kawałek drewna i sercem do pracy. Działamy głównie w Małopolsce, gdzie mieści się nasza
          pracownia i realizujemy większość zamówień. <br />
          Choć lokalni, nasze meble z radością trafiają do domów w całej Polsce – prosto z naszego serca do Twojego
          wnętrza.
        </p>
      </DialogContent>
    </Dialog>
  );
}
