const API = "https://todo-para-isa.zeabur.app/v1/books"

async function GetApi () {
        const response = await fetch(API)
        const data = await response.json()

        return data
}

export { GetApi }
