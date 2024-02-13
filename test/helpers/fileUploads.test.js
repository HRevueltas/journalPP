import { v2 as cloudinary } from 'cloudinary';
import { fileUploads } from "../../src/helpers/fileUploads";

// configuración de cloudinary para poder identificar el recurso

cloudinary.config({
    cloud_name: 'divvl9oy1',
    api_key: '931897919543585',
    api_secret: 'IsjUhcq_NrV99T8QHTI-iGhvR1I',
    secure: true
});

describe('pruebas en fileUploads', () => {

    test('fileUploads debe retornar un string', async () => {
        const imageUrl = 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob()
        const file = new File([blob], 'image.jpg')

        const url = await fileUploads(file)
        expect(typeof url).toBe('string')

        const segments = url.split('/')

        const imageId = segments[segments.length - 1].replace('.jpg', '')

        const cloudResp = await cloudinary.api.delete_resources(['journal-app/' + imageId], {
            resource_type: 'image',
            format: 'jpg'
        })
        // console.log({cloudResp});
    })


    test('debe retornar null si no se le pasa ningún archivo ', async () => {
        const file = new File([], 'image.jpg')

        const url = await fileUploads(file)
        expect(url).toBe(null)

    })

});