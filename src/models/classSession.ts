import { model, Schema } from 'mongoose';
import { IClassSessions, IClassSessionsModel } from '../interfaces/classSessions.interface';

const sessionSchema = new Schema<IClassSessions>({
  startedAt: { type: Date, required: false },
  endedAt: { type: Date },
  participantsHistory: [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
  currentParticipants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }],
  classRoomId: { type: Schema.Types.ObjectId, ref: 'Classroom' },
  eventLog: [{ type: Schema.Types.ObjectId, ref: 'EventLog' }],
});

export const ClassSession = model<IClassSessions, IClassSessionsModel>(
  'ClassSession',
  sessionSchema
);
