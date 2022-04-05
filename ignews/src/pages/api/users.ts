import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Italo' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Carlito' },
    ]

    return response.json(users)
}