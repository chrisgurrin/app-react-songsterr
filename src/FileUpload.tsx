import DOMPurify from 'dompurify';

type Props = {
    onFileUpload: (html: string) => void;
};

export const FileUpload = ({ onFileUpload }: Props) => {
    const setPageTitle = (html: string) => {
        const artistsPattern = /aria-label="artist">(.*?)<\/a>/;
        const artistMatch = html.match(artistsPattern);

        const titlePattern = /aria-label="title">([\s\S]*?)<\/span>/;
        const titleMatch = html.match(titlePattern);

        if (titleMatch && artistMatch) {
            document.title = `${titleMatch[1]} - ${artistMatch[1]}`;
        }
    };

    const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = function (evt) {
                if (!evt.target?.result) {
                    return;
                }
                const clean = DOMPurify.sanitize(evt.target.result as string);

                setPageTitle(clean);
                onFileUpload(clean);
            };
            reader.onerror = function (evt) {
                console.log(evt.target?.result ?? '');
            };
        }
    };

    return (
        <input
            type="file"
            name="myFile"
            onChange={uploadFile}
            className="bg-zinc-500 text-zinc-900 w-96"
        />
    );
};
