import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CbFEcOuk.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_TWu2PFnY.mjs';
import { CiFacebook } from 'react-icons/ci';
import { PiPhoneThin } from 'react-icons/pi';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { motion } from 'framer-motion';
/* empty css                         */

const hebelMebelLogo = new Proxy({"src":"/_astro/Logo.wx4TSLIN.png","width":441,"height":442,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/images/Logo.png";
							}
							
							return target[name];
						}
					});

const hebelMebelLogoWhite = new Proxy({"src":"/_astro/LogoWhite.NAsgfteI.png","width":441,"height":442,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/public/LogoWhite.png";
							}
							
							return target[name];
						}
					});

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": hebelMebelLogo, "alt": "logo", "class": "md:mx-auto size-[4.5rem] block dark:hidden" })} ${renderComponent($$result, "Image", $$Image, { "src": hebelMebelLogoWhite, "alt": "logo", "class": "md:mx-auto size-[4.5rem] hidden dark:block" })}`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/Logo.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-[90%] md:max-w-xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4 dark:text-white" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight dark:text-white", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      className: cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Input.displayName = "Input";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const WriteButton = React__default.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      width: "153",
      height: "60",
      viewBox: "0 0 150 60",
      initial: "hidden",
      animate: "visible",
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      className: "outline-none z-10 ",
      children: [
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            className: "stroke stroke-[2px] stroke-linecap-round fill-transparent stroke-black dark:stroke-white",
            width: "145",
            height: "52",
            rx: "10",
            x: "6",
            y: "6",
            stroke: "#000000",
            strokeDasharray: "400",
            strokeDashoffset: "400",
            animate: { strokeDashoffset: 0 },
            transition: {
              duration: 1.3,
              ease: "easeInOut",
              delay: 0
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.rect,
          {
            className: "stroke-[2px] stroke-linecap-round fill-transparent stroke-black dark:stroke-white",
            width: "145",
            height: "52",
            rx: "10",
            x: "1",
            y: "1",
            strokeDasharray: "400",
            strokeDashoffset: "400",
            animate: { strokeDashoffset: 0 },
            transition: {
              duration: 1.3,
              ease: "easeInOut",
              delay: 0.5
            }
          }
        ),
        /* @__PURE__ */ jsx(motion.text, { x: "72.5", y: "32", textAnchor: "middle", dominantBaseline: "middle", className: "fill-black dark:fill-white", children: "Napisz" })
      ]
    }
  );
});

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

const Saw = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "#000000",
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.002 512.002",
      className: "spinner",
      children: [
        /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M256.001,112.759c-78.984,0-143.241,64.258-143.241,143.241s64.258,143.241,143.241,143.241\n			s143.241-64.258,143.241-143.241S334.984,112.759,256.001,112.759z M256.001,291.156c-19.416,0-35.155-15.739-35.155-35.155\n			s15.739-35.155,35.155-35.155c19.416,0,35.155,15.739,35.155,35.155S275.416,291.156,256.001,291.156z"
          }
        ) }) }),
        /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M509.147,191.274c-1.772-1.074-3.975-1.144-5.811-0.187l-33.21,17.321c-2.377,1.24-5.291,0.728-7.104-1.247\n			c-1.813-1.975-2.073-4.922-0.634-7.185l27.882-43.843c1.185-1.862,1.235-4.23,0.131-6.142l-42.528-73.66\n			c-1.036-1.794-2.933-2.916-5.004-2.961c-2.071-0.045-4.015,0.996-5.126,2.743l-20.1,31.607c-1.438,2.263-4.219,3.276-6.776,2.473\n			c-2.558-0.804-4.257-3.227-4.142-5.905l2.225-51.91c0.094-2.206-1.046-4.28-2.956-5.384L332.334,4.468\n			c-1.794-1.036-3.998-1.059-5.814-0.062c-1.815,0.997-2.979,2.87-3.068,4.939l-1.604,37.422c-0.114,2.679-2.014,4.947-4.632,5.529\n			s-5.299-0.665-6.54-3.043L286.648,3.184C285.627,1.227,283.603,0,281.395,0H196.34c-2.071,0-3.992,1.082-5.066,2.853\n			c-1.074,1.772-1.144,3.975-0.187,5.811l17.321,33.211c1.24,2.378,0.728,5.291-1.247,7.104c-1.975,1.813-4.922,2.073-7.185,0.634\n			l-43.843-27.882c-1.862-1.185-4.23-1.235-6.142-0.131L76.333,64.128c-1.794,1.036-2.916,2.933-2.961,5.004\n			c-0.045,2.071,0.996,4.014,2.744,5.126l31.607,20.101c2.263,1.438,3.276,4.219,2.473,6.776c-0.804,2.558-3.227,4.257-5.905,4.142\n			l-51.91-2.225c-2.206-0.094-4.28,1.045-5.384,2.956L4.468,179.667c-1.036,1.794-1.059,3.999-0.063,5.814\n			c0.997,1.815,2.87,2.979,4.939,3.068l37.422,1.604c2.679,0.114,4.947,2.015,5.529,4.633c0.582,2.618-0.665,5.299-3.043,6.54\n			L3.185,225.352c-1.957,1.021-3.184,3.045-3.184,5.253v85.055c0,2.071,1.082,3.992,2.853,5.066\n			c1.772,1.074,3.975,1.144,5.811,0.187l33.21-17.321c2.378-1.24,5.291-0.728,7.104,1.247c1.813,1.976,2.073,4.922,0.634,7.185\n			l-27.881,43.843c-1.185,1.862-1.235,4.23-0.131,6.142l42.528,73.66c1.036,1.794,2.933,2.916,5.004,2.961\n			c2.071,0.045,4.014-0.996,5.126-2.743l20.101-31.607c1.438-2.263,4.219-3.276,6.776-2.473c2.558,0.804,4.257,3.227,4.142,5.905\n			l-2.225,51.91c-0.094,2.206,1.045,4.28,2.956,5.384l73.66,42.528c1.794,1.036,3.998,1.059,5.814,0.063\n			c1.817-0.996,2.979-2.87,3.068-4.939l1.604-37.422c0.114-2.679,2.015-4.947,4.633-5.529s5.299,0.665,6.54,3.043l24.027,46.068\n			c1.021,1.957,3.045,3.184,5.253,3.184h85.055c2.071,0,3.992-1.082,5.066-2.853c1.074-1.772,1.144-3.974,0.187-5.811l-17.321-33.21\n			c-1.24-2.377-0.728-5.291,1.247-7.104c1.976-1.813,4.922-2.073,7.185-0.634l43.842,27.881c1.862,1.185,4.23,1.235,6.142,0.131\n			l73.66-42.528c1.794-1.036,2.916-2.933,2.961-5.004c0.045-2.071-0.996-4.015-2.744-5.126l-31.607-20.101\n			c-2.263-1.438-3.276-4.219-2.473-6.776c0.803-2.557,3.226-4.257,5.905-4.142l51.91,2.225c2.206,0.094,4.28-1.045,5.384-2.956\n			l42.528-73.66c1.036-1.794,1.059-3.999,0.062-5.814c-0.996-1.815-2.87-2.979-4.939-3.068l-37.422-1.604\n			c-2.679-0.114-4.947-2.015-5.529-4.633s0.665-5.299,3.043-6.54l46.068-24.027c1.957-1.021,3.184-3.045,3.184-5.253V196.34\n			C512.001,194.269,510.919,192.348,509.147,191.274z M256.001,432.901c-97.544,0-176.901-79.357-176.901-176.901\n			s79.357-176.9,176.901-176.9s176.901,79.357,176.901,176.901S353.544,432.901,256.001,432.901z"
          }
        ) }) })
      ]
    }
  );
};

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "apiKey");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setIsOpen(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs(Dialog, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ jsx(DialogTrigger, { children: /* @__PURE__ */ jsx(WriteButton, {}) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px] dark:bg-myDarkSemiGray top-[35vh] md:top-[50%]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Daj mi znać jaki mebel Cię interesuje" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Zadaj pytanie o cene, termin realizacji lub cokolwiek co ci przychodzi do głowy" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", className: "text-right", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                id: "email",
                type: "email",
                name: "email",
                className: "col-span-3",
                placeholder: "twójemail@gmail.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-right", children: "Wiadomość" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                name: "message",
                placeholder: "Jaki jest czas oczekiwania dla stołu jadalnego?",
                required: true,
                className: "col-span-3"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs(DialogFooter, { className: "flex", children: [
          /* @__PURE__ */ jsxs("label", { className: " text-sm max-w-[70%] mr-auto text-MyGray ", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", name: "privacy", required: true, className: "mr-2" }),
            "Zaznaczając akceptujesz naszą",
            " ",
            /* @__PURE__ */ jsx("a", { href: "/politykaprywatnosci", className: "underline", children: "Politykę Prywatności" })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              disabled: isDisabled,
              className: "shadow-none border-2 border-black bg-transparent dark:text-white dark:border-white text-black hover:text-white rounded-[8px]",
              children: [
                "Wyślij",
                isDisabled && /* @__PURE__ */ jsx(Saw, {})
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="Contact"> <div class="bg-MyLightGray dark:bg-myDarkLighterDark lg:mt-0 mt-0 dark:text-myDarkText"> <div class="max-w-[900px] gap-y-10 py-12 flex lg:justify-between items-center mx-auto flex-col justify-center lg:flex-row"> <div class="text-5xl font-extralight  flex flex-col items-center justify-center md:items-start"> <h1>Daj mi znać
</h1> <h1 class="mt-4  text-center md:text-left px-6 md:px-0 ">Jaki mebel Cię interesuje</h1> </div> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/ContactForm", "client:component-export": "ContactForm" })} </div> <div class="max-w-[900px] mx-auto border-t-2  border-gray-200 flex flex-col px-4 pb-8"> <div class="flex justify-between items-center mt-6 flex-row "> <div class="flex items-center flex-col lg:flex-row"> ${renderComponent($$result, "Logo", $$Logo, {})} <div class="ml-4"> <h1 class="text-2xl">Hebel Mebel</h1> <h2>Stolarstwo</h2> </div> </div> <div class="flex flex-col lg:flex-row md:justify-center md:items-center  justify-start items-start space-y-2 md:space-y-0 mr-6 md:mr-0 lg:space-x-10"> <div class="flex space-x-2 items-center justify-center"> ${renderComponent($$result, "PiPhoneThin", PiPhoneThin, { "size": 30 })} <h1>789 483 925</h1> </div> <div class="flex space-x-2 items-center justify-center"> ${renderComponent($$result, "CiFacebook", CiFacebook, { "size": 30 })} <h1>hebelmebel</h1> </div> <div class="flex space-x-2 items-center justify-center pt-1 lg:mt-0 relative dark:right-1"> <img src="/Olx.svg" class="size-[28px] border border-black rounded-full px-1 block dark:hidden"> <img src="/OlxWhite.svg" class=" size-[28px] border dark:border-myDarkText rounded-full px-1 hidden dark:block"> <h1>hebelmebel</h1> </div> </div> </div> <div class="mt-6 flex justify-between px-4"> <h1>© Hebel Mebel 20244</h1> <h1>Realizacja: Wiktor Dawid</h1> </div> </div> </div> </footer>`;
}, "/Users/wiktordawid/Desktop/HebelMebel/HebelMebel/src/components/HomePage/Footer.astro", void 0);

export { $$Footer as $, ContactForm as C, Dialog as D, DialogTrigger as a, DialogContent as b, DialogHeader as c, DialogTitle as d, DialogDescription as e };
