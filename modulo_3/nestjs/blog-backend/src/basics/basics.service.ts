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
    verificarPermiso(nombre: string, edad: number, dosParametros: string): object {
        if (edad >= 18) {
            return {
                nombre: nombre,
                edad: edad,
                permiso: true,
                mensaje: `${nombre} puede manejar`,
                parametro: dosParametros
            };
        } else {
            return {
                nombre: nombre,
                edad: edad,
                permiso: false,
                mensaje: `${nombre} no puede manejar`,
                parametro: dosParametros
            };
        }
    }
    
    areaTriangulo(parameter:any): object {
        const area = (parameter.base * parameter.altura) / 2;
        return {
            service: 'Blog Backend API',
            function: 'calculo area triangulo',
            message: 'Funcion para calcular el área de un triángulo',
            parameter:parameter,
            area: area
        };
    }
    calcularPromedio(nota1: number, nota2: number, nota3: number): object {
        nota1 = Number(nota1);
        nota2 = Number(nota2);
        nota3 = Number(nota3);
        const promedio = (nota1 + nota2 + nota3) / 3;
        return {
            service: 'Blog Backend API',
            function: 'basics peticion post',
            message: 'Funcion para calcular el promedio de tres notas',
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            promedio: promedio
        };
    }

    verificarCredito(edad: number, ingresos: number, historialCrediticio: string): object {
        let aprobarCredito = "No";

        if(edad >= 20 && ingresos>=2000&&historialCrediticio==="bueno"){
            aprobarCredito = "Si";
        }
        return {
            service: 'Blog Backend API',
            function: 'verificar credito',
            message: 'Funcion para verificar credito',
            edad: edad,
            ingresos: ingresos,
            historialCrediticio: historialCrediticio,
            aprobarCredito: aprobarCredito
        };
    }
}