import React, {useRef} from 'react';
import './index.css';
import useGetContent from './hooks/useGetContent';
const Content: React.FC = () => {
    const linkRef = useRef(null);
    const {
        error,
        url,
        loading,
        handleChangeUrl,
        handleShortenUrl,
        result,
        handleCopy,
    } = useGetContent()
    return (
        <div className='content'>
            <div className='actions'>
                <input className='textBox' value={url} type='text' onChange={(e) => handleChangeUrl(e.target.value)}/>
                <button className='btn' type='submit' onClick={handleShortenUrl}>Short IT!</button>
            </div>
            {error && (
                <div className='error'>Please enter a valid url!</div>
            )}
            {result && (
                <div className='result'>
                    Your url is: {<a ref={linkRef} href={url}>{result}</a>}
                    <button className='btn' type='submit' onClick={() => handleCopy(linkRef.current)}>Copy Link!</button>
                </div>
            )}
        </div>
    )
}

export default Content;
