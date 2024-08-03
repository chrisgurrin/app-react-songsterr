type Props = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

export const Help = ({ isOpen, setIsOpen }: Props) => {
    if (!isOpen) {
        return <></>;
    }
    return (
        <div className="fixed left-0 right-0 top-0 bottom-0 bg-zinc-800/50 flex items-center justify-center z-50 text-zinc-300">
            <div className="p-4 bg-zinc-700 max-w-[52rem]">
                <h1>Instructions</h1>
                <hr className="mb-2" />
                <ol className="mx-4">
                    <li>
                        Right click on the page and choose "Save page as..."
                    </li>
                    <li>
                        Make sure you choose "Web page, complete" as the save
                        type. Anything else will not work
                    </li>
                    <li>
                        Open the downloaded html file using the "Browse" button
                        in the toolbar at the top of this page
                        <ul className="mx-4">
                            <li>
                                The preview will look a bit messed up when it
                                loads, but trust that when you print it will
                                look fine
                            </li>
                        </ul>
                    </li>
                    <li>
                        If you want to save it as a pdf (to take to Officeworks
                        to print, for example), choose the "Save to PDF" option
                        in the print window
                    </li>
                </ol>
                <br />
                <button
                    onClick={() => setIsOpen(false)}
                    className="bg-zinc-200 px-4 flex gap-2 items-center justify-center border-2 hover:border-sky-600 text-zinc-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
