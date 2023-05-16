const formatDate = (date)=>{
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const locale = 'es-ES';

    const now = new Date(date).toLocaleDateString(locale, options); 
    return now;
}

export default formatDate;