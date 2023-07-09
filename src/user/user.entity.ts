import { Role } from '../common/types/role';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 100 })
  public name: string;

  @Column({ type: 'varchar', length: 150 })
  public email: string;

  @Column({ type: 'varchar', length: 255 })
  public password: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  public createdAt: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  public updatedAt: Date;

  @Column({ type: 'varchar', length: 17 })
  public role: Role;

  @Column({ type: 'boolean', default: 'true' })
  public isActive: boolean;

  @BeforeInsert()
  setUpBeforeInsert(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string) {
    this.email = email;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getRole(): Role {
    return this.role;
  }

  setRole(role: Role) {
    this.role = role;
  }

  getIsActive(): boolean {
    return this.isActive;
  }

  setIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
}
