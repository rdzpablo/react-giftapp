export const getGifs = async (categoria)=> {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=9&apikey=mBr8ZoYSiqv3WQFJxYU435k0UG7Timf2`);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        };
    });
    
    return gifs;
    
}