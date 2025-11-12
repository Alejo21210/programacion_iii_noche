import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {
    myFirstGet(): object {
        return {
            service: 'Blog Backend API',
            fuction: 'basics get',
            message: 'My new Get'
        };
    }
    mySecondGet(): object {
        return {
            service: 'Blog Backend API',
            fuction: 'basics get',
            message: 'My second Get'
        };
    }

    fuctionWithParameter(myParametro: string): object {
        return {
            service: 'Blog Backend API',
            function: 'basics get with parameter',
            message: 'Funcion con parámetro',
            parameter: myParametro
        };
    }

    fuctionWithPost(parameter: object): object {
        return {
            service: 'Blog Backend API',
            function: 'basics post',
            message: 'Funcion con método POST',
            parameter: parameter
        };
    }

    updateWithPut(parameter: string, body: object): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion put',
            message: 'Funcion con método PUT',
            parameter: parameter,
            body: body
        };
    }

    updateWithPatch(parameter: string, body: object): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion patch',
            message: 'Funcion con método PATCH',
            parameter: parameter,
            body: body
        };
    }

    delete(parameter: string): object {
        return {
            service: 'Blog Backend API',
            function: 'basics peticion delete',
            message: 'Funcion con método DELETE',
            parameter: parameter
        };
    }   
}
