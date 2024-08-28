const mockResponse = {
    data: {
        result: [{
            name: "Aniket"
        },
        {
            name: "Harb"
        }
    ]
    }
}





export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
