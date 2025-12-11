import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CursoDocument = Curso & Document;

@Schema({ timestamps: true })
export class Curso {
  save(): Curso | PromiseLike<Curso | null> | null {
    throw new Error('Method not implemented.');
  }
  deleteOne(): Curso | PromiseLike<Curso | null> | null {
    throw new Error('Method not implemented.');
  }
  @Prop({ type: String, default: () => uuidv4() })
  _id: string;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  categoria: string;

  @Prop({ required: true })
  fecha_inicio: Date;

  @Prop({ required: true })
  fecha_fin: Date;

  @Prop({ required: true })
  nivel: string;

  @Prop({ required: true, default: [] })
  requisitos: string[];

  @Prop({ required: true })
  precio: number;

  @Prop({
    type: {
      nombre: { type: String, required: true },
      email: { type: String, required: true }
    },
    required: true
  })
  instructor: {
    nombre: string;
    email: string;
  };

  @Prop({ required: true, default: 0 })
  calificacion_promedio: number;

  @Prop({ required: true, default: 'activo' })
  estado: string;

  @Prop({ type: [String], default: [] })
  contenidos: string[];
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
CursoSchema.set('_id', false);
CursoSchema.pre('save', function(next) {
  if (!this._id) {
    this._id = uuidv4();
  }
  next();
});

