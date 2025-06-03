import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import WriteButton from "./WriteButton";
import {Textarea} from "./ui/textarea";
import {useState} from "react";
import Saw from "./Saw";

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <WriteButton />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] dark:bg-myDarkSemiGray top-[35vh] md:top-[50%]'>
        <DialogHeader>
          <DialogTitle>Daj mi znać jaki mebel Cię interesuje</DialogTitle>
          <DialogDescription>
            Zadaj pytanie o cene, termin realizacji lub cokolwiek co ci przychodzi do głowy
          </DialogDescription>
        </DialogHeader>
        <form action='https://api.web3forms.com/submit' method='POST'>
          <input type='hidden' name='access_key' value='wEK5msa2bWad9N7'></input>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input
                required
                id='email'
                type='email'
                name='email'
                className='col-span-3'
                placeholder='twójemail@gmail.com'
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='message' className='text-right'>
                Wiadomość
              </Label>
              <Textarea
                name='message'
                placeholder='Jaki jest czas oczekiwania dla stołu jadalnego?'
                required
                className='col-span-3'
              ></Textarea>
            </div>
          </div>

          <DialogFooter className='flex'>
            <label className=' text-sm max-w-[70%] mr-auto text-MyGray '>
              <input type='checkbox' name='privacy' required className='mr-2 mt-4 md:mt-0' />
              Zaznaczając akceptujesz naszą{" "}
              <a href='/politykaprywatnosci' className='underline'>
                Politykę Prywatności
              </a>
            </label>
            <Button
              type='submit'
              className='shadow-none border-2 border-black bg-transparent dark:text-white dark:border-white text-black hover:text-white rounded-[8px]'
            >
              Wyślij
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
