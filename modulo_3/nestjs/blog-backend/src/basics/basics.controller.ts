import { Controller, Get, Param, Post, Body, Put, Patch, Delete, Query } from '@nestjs/common';
import { BasicsService } from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(private readonly basicsService: BasicsService) {}

    @Get()
    myFirstGet(): object {
        return this.basicsService.myFirstGet();
    }

    @Get('my-second-get')
    mySecondGet(): object {
        return this.basicsService.mySecondGet();
    }


    @Get(':myParameter')
    requestWithParameter(@Param('myParameter') myParameter: string) {
        return this.basicsService.fuctionWithParameter(myParameter);
    }

    @Post()
    create(@Body() bodyData: object) {
        return this.basicsService.fuctionWithPost(bodyData);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateBody: object) {
        return this.basicsService
        .updateWithPut(id, updateBody);
    }
    @Patch(':id')
    updatePatch(
        @Param('id') id: string,
        @Body() updateBody: object) {
        return this.basicsService
        .updateWithPatch(id, updateBody);
    }
    @Delete(':id')
    delete(@Param('id') id: string
    ) {
    return this.basicsService.delete(id);
    }

    @Post('area-triangulo')
    areaTriangulo(@Body() bodyData: object) {
        return this.basicsService.areaTriangulo(bodyData);
    }

    @Post(':dosParametros')
    createWithTwoParameters(
        @Param('dosParametros') dosParametros: string,
        @Body() body: { nombre: string; edad: number }
    ) {
        return this.basicsService.verificarPermiso(body.nombre, body.edad, dosParametros);
    }

    @Get('calcular-promedio/:nota1/:nota2/:nota3')
    promedio(
        @Param('nota1') nota1: number,
        @Param('nota2') nota2: number,
        @Param('nota3') nota3: number,
    ) {
        return this.basicsService
            .calcularPromedio(nota1, nota2, nota3);
    }

    @Get('verificar-credito')
    verificarCredito(
        @Query('edad') edad: string,
        @Query('ingreso') ingresos: string,
        @Query('historialCrediticio') historialCrediticio: string,
    ) {
        return this.basicsService
            .verificarCredito(+edad, +ingresos, historialCrediticio);
    }
}