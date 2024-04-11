import { useCallback, useState } from 'react';

const shortid = require('shortid');

const regExp = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
);

const useGetContent = () => {
    const [url, setUrl] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChangeUrl = (url: string) => {
        if (error) setError(false);
        setUrl(url);
    };

    const handleCopy = async (link: any) => {
        await navigator.clipboard
            .write([
                new ClipboardItem({
                    "text/html": new Blob([link.outerHTML], {
                        type: "text/html",
                    }),
                    "text/plain": new Blob([link.textContent], {
                        type: "text/plain",
                    }),
                }),
            ]);
    }

    const handleShortenUrl = useCallback(async () => {
        setLoading(true);
        const isValidUrl = regExp.test(url);

        if (isValidUrl) {
            setError(false);
            const shortenUniqueUrl = shortid.generate();
            setResult(shortenUniqueUrl + '.ok')
        } else {
            setError(true);
        }

        setLoading(false);
    }, [url])

    return {
        result,
        error,
        url,
        loading,
        handleChangeUrl,
        handleShortenUrl,
        handleCopy
    }
}

export default useGetContent;
