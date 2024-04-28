import QuestionCard from '@/components/cards/QuestionCard';
import HomeFilter from '@/components/home/HomeFilter';
import Filter from '@/components/shared/Filter';
import NoResult from '@/components/shared/NoResult';

import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filter';

import Link from 'next/link';

const questions = [
  {
    _id: '1',
    title: 'How to use React Query?',
    tags: [
      { _id: '1', name: 'React Query' },
      { _id: '2', name: 'React' },
    ],
    author: {
      _id: '1',
      name: 'John Doe',
      picture: 'url_to_picture',
      clerkId: 'clerk_id',
    },
    upvotes: ['user1', 'user2'],
    views: 10,
    answers: [
      {
        _id: '1',
        text: 'Example answer 1',
        authorId: 'author_id_1',
        createdAt: new Date(),
      },
      {
        _id: '2',
        text: 'Example answer 2',
        authorId: 'author_id_2',
        createdAt: new Date(),
      },
    ],
    createdAt: new Date('2021-09-01T00:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'How to use Next.js?',
    tags: [
      { _id: '3', name: 'Next.js' },
      { _id: '4', name: 'React' },
    ],
    author: {
      _id: '2',
      name: 'Jane Doe',
      picture: 'url_to_picture',
      clerkId: 'clerk_id',
    },
    upvotes: ['user3', 'user4', 'user5'],
    views: 20,
    answers: [
      {
        _id: '3',
        text: 'Example answer 1',
        authorId: 'author_id_3',
        createdAt: new Date(),
      },
      {
        _id: '4',
        text: 'Example answer 2',
        authorId: 'author_id_4',
        createdAt: new Date(),
      },
      {
        _id: '5',
        text: 'Example answer 3',
        authorId: 'author_id_5',
        createdAt: new Date(),
      },
      {
        _id: '6',
        text: 'Example answer 4',
        authorId: 'author_id_6',
        createdAt: new Date(),
      },
      {
        _id: '7',
        text: 'Example answer 5',
        authorId: 'author_id_7',
        createdAt: new Date(),
      },
    ],
    createdAt: new Date('2021-10-01T00:00:00.000Z'),
  },
];

export default async function Home() {
  return (
    <main>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/ "
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            //  'question'
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </main>
  );
}
