import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Travel Verse`;
    }, [title])
};

export default useTitle;