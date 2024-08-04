import { useState } from 'react';

export function useFormSubmit() {
    const [inputFields, setInputFields] = useState({}); // Debe iniciarse en {} para acceder a .search

    const handleSubmit = (e) => {
        e.preventDefault();

        // Recuperamos todos los values de todos los inputs
        const fields = Object.fromEntries(new FormData(e.target));
        if (fields.search === '') {
            setInputFields({})
            return
        }
        setInputFields(fields);

        // Restablecemos el formulario
        e.target.reset();
    }

    const resetNowSearching = () => {

    }

    return { inputFields, handleSubmit };
}