import { Participant } from './Participant';
import { ReferenceLink } from './ReferenceLink';
import { Topic } from './Topic';

export interface QuestionAndAnswer {
  id: number;
  question: string;
  answer: string;
  referenceLink: ReferenceLink;
  responsible: Participant;
  topic: Topic;
}
