// @ts-ignore
import {Entity, PrimaryGeneratedColumn, Column, createConnection, Connection, Repository} from 'typeorm';

@Entity()
export class Papel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sigla: string;

    @Column('text')
    descricao: string;

}
let connection:Connection;

export async function getProductRepository(): Promise<Repository<Papel>> {
    if (connection===undefined) {
        connection = await createConnection({
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
