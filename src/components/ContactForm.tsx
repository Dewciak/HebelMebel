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
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsDisabled(true);
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "apiKey");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      setIsOpen(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <WriteButton />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Daj mi znać jaki mebel cie interesuje</DialogTitle>
          <DialogDescription>
            Zadaj pytanie o cene, termin realizacji lub cokolwiek co ci przychodzi do głowy
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
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
              <Textarea name='message' required className='col-span-3'></Textarea>
            </div>
          </div>

          <DialogFooter>
            <Button type='submit' disabled={isDisabled} className='shadow-none border-2 border-black rounded-[8px]'>
              Wyślij
              {isDisabled && <Saw />}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
