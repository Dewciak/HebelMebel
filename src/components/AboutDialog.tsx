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
      <DialogContent className='m:max-w-[600px]'>
        <DialogHeader>
          <DialogTitle>O nas</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <p className='text-justify'>
          Hebel Mebel to firma stolarska, która łączy tradycyjne rzemiosło z nowoczesnym designem. Od lat tworzymy
          wyjątkowe meble na wymiar, które łączą funkcjonalność, trwałość i estetykę. Nasza pasja do drewna i dbałość o
          detale sprawiają, że każdy projekt jest dopracowany w najmniejszym szczególe. Nasza misja to wnoszenie piękna
          do Twojego domu poprzez meble, które są nie tylko praktyczne, ale także odzwierciedlają Twoje potrzeby i styl
          życia. Pracujemy z najlepszymi materiałami i nowoczesnymi technologiami, ale zawsze z poszanowaniem
          tradycyjnych technik stolarskich. Dlaczego warto wybrać Hebel Mebel? Indywidualne podejście – każdy projekt
          dopasowujemy do Twoich oczekiwań. Jakość – tworzymy meble, które przetrwają pokolenia. Pasja – kochamy drewno
          i jego naturalne piękno. Realizujemy projekty zarówno dla klientów indywidualnych, jak i biznesowych. Od
          kuchni, przez garderoby, po meble biurowe – z nami każde wnętrze zyska niepowtarzalny charakter. Zapraszamy do
          współpracy i wspólnego tworzenia mebli, które będą świadectwem naszej pasji i Twojego stylu! Hebel Mebel –
          drewno w najlepszym wydaniu.
        </p>
      </DialogContent>
    </Dialog>
  );
}
