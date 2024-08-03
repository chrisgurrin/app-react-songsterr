import { useState } from 'react';
import { FileUpload } from './FileUpload';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
import { Help } from './Help';

const App = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [isHelpOpen, setIsHelpOpen] = useState(false);

    return (
        <div className="bg-zinc-700 w-full min-h-screen absolute">
            <div
                id="toolbar"
                className="flex gap-4 py-2 px-12 gap-6 sticky top-0 z-40"
            >
                <FileUpload
                    onFileUpload={(html: string) => setHtmlContent(html)}
                />
                |
                <button
                    onClick={window.print}
                    className="bg-zinc-200 px-4 flex gap-2 items-center border-2 hover:border-sky-600"
                >
                    <FontAwesomeIcon icon={faPrint} className="text-zinc-600" />
                    Print
                </button>
                |
                <button
                    onClick={() => setIsHelpOpen(true)}
                    className="bg-zinc-200 px-4 flex gap-2 items-center justify-center border-2 hover:border-sky-600"
                >
                    <FontAwesomeIcon
                        icon={faQuestion}
                        className="text-zinc-600"
                    />
                    Help
                </button>
            </div>
            <br />
            <div
                className="z-10"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
            <Help isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
        </div>
    );
};

export default App;
