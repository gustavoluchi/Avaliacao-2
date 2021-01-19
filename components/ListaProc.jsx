import { useState } from "react";
import { CircularProgress } from '@material-ui/core'

export default function ListaProc() {
    const [loading, setLoading] = useState(true);
    setTimeout((() => {
      setLoading(false)
      console.log(loading)
    }), 5000)
    return (
        <div>
            {loading === true && <CircularProgress color='secondary' />}
        </div>
    )
}
