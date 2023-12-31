import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
    AtSymbolIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    PaperAirplaneIcon,
    UserIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "react-intersection-observer";
import { Input } from "../components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const [loading, isLoading] = useState(false);
    const [success, isSuccess] = useState(false);
    const [error, isError] = useState(false);
    const FORM = useRef();
    const SERVICE_ID = "";
    const TEMPLATE_ID = "";
    const PUBLIC_KEY = "";

    const handleSubmit = (e) => {
        e.preventDefault();

        isLoading(true);
        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, FORM.current, PUBLIC_KEY)
            .then(
                (result) => {
                    isLoading(false);
                    isSuccess(true);
                },
                (error) => {
                    isLoading(false);
                    isError(true);
                },
            );
    };

    return (
        <section
            id="contact"
            className={`container flex -scroll-mt-24 flex-col px-6 pb-32 pt-12 sm:m-auto md:items-center xl:pt-48
            ${inView ? "animate-from_left_appear opacity-100" : "opacity-0"}`}
            ref={ref}
        >
            <h2
                className="
                    relative w-fit select-none font-serif text-6xl font-bold uppercase text-stone-700 before:absolute before:top-1/2 before:block
                    before:h-0.5 before:w-full before:skew-y-3 before:bg-stone-100 dark:text-[var(--color-text-darker)] dark:before:bg-[var(--color-background)] sm:text-8xl sm:before:h-1 md:text-9xl md:before:h-1.5
                "
            >
                Contact
            </h2>
            <p className="text-center font-mono dark:text-[var(--color-text)]">
                Je ne suis pas à la recherche nouvelles opportunités
                actuellement, cependant ma boîte mail reste ouverte pour toute
                demande.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between md:mt-24 2xl:w-1/2">
                <a
                    href="https://github.com/Lost-Somewhere"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center gap-2 font-serif text-xl font-light dark:text-[var(--color-red)] sm:flex"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-8 w-8 dark:fill-[var(--color-red)]"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                        ></path>
                    </svg>{" "}
                    GitHub
                </a>
                <a
                    href="mailto:anthony.arrighi@orange.fr"
                    className="flex items-center gap-2 font-serif text-xl font-light dark:text-[#d71945]"
                >
                    <EnvelopeIcon className="h-5 w-5" />{" "}
                    anthony.arrighi@orange.fr
                </a>
            </div>
            <div className="relative mt-2 rounded border border-[var(--color-red-darker)] bg-stone-700 p-12 shadow-xl dark:bg-[var(--color-background-lighter)] 2xl:w-1/2">
                <p className="mb-12 font-mono text-[var(--color-text)]">
                    Vous pouvez me contacter par e-mail, sur les réseaux sociaux
                    ou directement depuis le formulaire ci-dessous.
                </p>

                {loading && (
                    <div className="flex items-center justify-center gap-4">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-labelledby="title-04a desc-04a"
                            aria-live="polite"
                            aria-busy="true"
                            className="animate h-6 w-6 animate-spin"
                        >
                            <title id="title-04a">Chargement</title>
                            <desc id="desc-04a">En cours d'envoi...</desc>
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                className="stroke-slate-200"
                                strokeWidth="4"
                            />
                            <path
                                d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
                                className="stroke-red-500"
                                strokeWidth="4"
                            />
                        </svg>
                        <p className="text-[var(--color-text)]">
                            Envoi du message en cours...
                        </p>
                    </div>
                )}

                {success && (
                    <div
                        className="w-full rounded border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-500"
                        role="alert"
                    >
                        <p>
                            <span className="font-bold">
                                Message envoyé avec succès!
                            </span>{" "}
                            J'y répondrais dès que possible...
                        </p>
                        <p
                            onClick={() => isSuccess(false)}
                            className="mt-2 text-black hover:cursor-pointer hover:underline"
                        >
                            Envoyer un autre message
                        </p>
                    </div>
                )}

                {error && (
                    <div
                        className="w-full rounded border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-500"
                        role="alert"
                    >
                        <p>
                            <span className="font-bold">
                                Une erreur s'est produite!
                            </span>{" "}
                            Impossible d'envoyer ce message...
                        </p>
                        <p
                            onClick={() => isError(false)}
                            className="mt-2 text-black hover:cursor-pointer hover:underline"
                        >
                            Tenter d'envoyer un autre message
                        </p>
                    </div>
                )}

                {!loading && !success && !error && (
                    <form ref={FORM} onSubmit={handleSubmit}>
                        <div className="relative my-6">
                            <Input
                                name="name"
                                type="text"
                                placeholder="Nom et prénom"
                                icon={UserIcon}
                            />
                        </div>
                        <div className="relative my-6">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Adresse e-mail"
                                icon={AtSymbolIcon}
                            />
                        </div>
                        <div className="relative my-6">
                            <textarea
                                id="message"
                                name="message"
                                rows="8"
                                placeholder="Message"
                                className="peer relative w-full rounded border border-[var(--color-text)] px-4 pl-12 pt-3 placeholder-transparent outline-none transition-all autofill:bg-[var(--color-background)] invalid:border-pink-500 invalid:text-pink-500 focus:border-red-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 dark:bg-[var(--color-background)] dark:text-[var(--color-text)]"
                            />
                            <label
                                htmlFor="message"
                                className="absolute -top-2 left-2 z-[1] cursor-text px-2 font-sans text-xs text-[var(--color-text)] transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:left-10 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-red-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent dark:before:bg-[var(--color-background)]"
                            >
                                Message
                            </label>
                            <ChatBubbleOvalLeftEllipsisIcon className="absolute left-4 top-3 h-6 w-6 stroke-[var(--color-text)] peer-disabled:cursor-not-allowed" />
                        </div>
                        <button
                            type="submit"
                            className="m-auto flex w-fit items-center gap-4 border border-[var(--color-red-darker)] bg-stone-900 px-4 py-2 font-mono text-[var(--color-text)] duration-300 hover:cursor-pointer hover:border-[var(--color-red)] dark:bg-[var(--color-background)]"
                        >
                            <PaperAirplaneIcon className="h-5 w-5" />
                            Envoyer mon message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
