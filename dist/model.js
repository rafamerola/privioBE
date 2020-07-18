var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, createConnection } from 'typeorm';
export let Papel = class {
};
__decorate([
    PrimaryGeneratedColumn(), 
    __metadata('design:type', Number)
], Papel.prototype, "id");
__decorate([
    Column(), 
    __metadata('design:type', String)
], Papel.prototype, "sigla");
__decorate([
    Column('text'), 
    __metadata('design:type', String)
], Papel.prototype, "descricao");
Papel = __decorate([
    Entity(), 
    __metadata('design:paramtypes', [])
], Papel);
let connection;
async;
function getProductRepository() {
    if (connection === undefined) {
        connection = await;
        createConnection({
            type: 'sqlite',
            database: 'privio',
            synchronize: true,
            entities: [
                Papel
            ],
        });
    }
    return connection.getRepository(Papel);
}
