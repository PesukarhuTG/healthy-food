//постинг данных - настраивает запрос, посылает на сервер, получает ответ, трансформирует в json
const postData = async (url, data) => {
    const result = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await result.json();
};

//получение данных с сервера
const getResource = async (url) => {
    let result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status ${result.status}`);
    }
    return await result.json();
};

export {postData};
export {getResource};