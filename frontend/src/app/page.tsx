"use client";
import { useEffect, useState } from "react";
import { getEnglishQuestions } from "@/api/get";

type Questions = {
  id: number;
  level: number;
  difficulty: number;
  type: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export default function Home() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEnglishQuestions();
        setQuestions(data);
        setIsLoading(false);
      } catch (e) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [error]);

  if (isLoading)
    return <div className="mt-24 w-[1200px] mx-auto">Loading...</div>;
  if (error)
    return <div className="mt-24 w-[1200px] mx-auto">Error: {error}</div>;

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h4 className="text-sm text-neutral-200 font-medium">
              {question.type}
            </h4>
            <h3>{question.question}</h3>
            <div>
              <ul className="grid grid-cols-2">
                {question.options.map((option, index) => (
                  <li key={index}>
                    <button className="answer">{option}</button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
