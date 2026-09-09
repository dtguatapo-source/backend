import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  // 1. Buscar proveedores por coincidencia de nombre
  // Petición: GET http://localhost:3000/suppliers/search?name=drogueria
  @Get('search')
  searchByName(@Query('name') name: string) {
    return this.suppliersService.searchByName(name);
  }

  // 2. Buscar proveedor exacto por NIT
  // Petición: GET http://localhost:3000/suppliers/nit/900123456-1
  @Get('nit/:nit')
  findByNit(@Param('nit') nit: string) {
    return this.suppliersService.findByNit(nit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
    return this.suppliersService.update(+id, updateSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suppliersService.remove(+id);
  }
}