import React, { useState } from "react";
import { Divider } from "antd";

import DefaultQuestions from "./DefaultQuestions";
import AdditionalQuestions from "./AdditionalQuestions";
import Field from "@/form-controls/Field";
import QuestionForm from "./QuestionForm";

import { IQuestion } from "@/interfaces";

const RegistrationForm = ({
  questions,
  setQuestions,
  additionalQuestions,
  setAdditionalQuestions,
}: {
  questions?: IQuestion[];
  setQuestions: (questions: IQuestion[]) => void;
  additionalQuestions: IQuestion[];
  setAdditionalQuestions: (questions: IQuestion[]) => void;
}) => {
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    setSelectedQuestion(null);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <QuestionForm
        open={isOpen}
        onClose={onClose}
        questions={additionalQuestions}
        setQuestions={setAdditionalQuestions}
        question={selectedQuestion}
      />
      <Field
        name="name"
        label="Registration form name"
        type="text"
        required
        placeholder="Enter registration form name"
      />
      <Divider />
      <DefaultQuestions
        questions={questions as IQuestion[]}
        setQuestions={setQuestions}
      />
      <Divider />
      <AdditionalQuestions
        questions={additionalQuestions}
        setQuestions={setAdditionalQuestions}
        onOpen={onOpen}
        setSelectedQuestion={setSelectedQuestion}
      />
    </div>
  );
};

export default RegistrationForm;
