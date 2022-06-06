import type { NextPage } from 'next';
import Layout from '../partial/Layout';
import Notes from '../components/Notes/Notes';
import Container from '../components/Container/Container';
import Button from '../components/Button/Button';
import GeneratedTitle from '../components/GeneratedTitle/GeneratedTitle';
import apiRequest from './api/api';
import { useState, useCallback } from 'react';
import { ICourseProps } from '../types/Home';

const Home: NextPage = () => {
  const [thesis, setThesis] = useState<ICourseProps>({
    course: '',
    title: '',
  });

  const generateThesis = useCallback(async () => {
    const res = await apiRequest.get('/thesis');

    setThesis({
      course: res.data?.thesis.course,
      title: res.data?.thesis.title,
    });
  }, [setThesis]);

  return (
    <>
      <Layout>
        <Container>
          <Notes />
          <Button generateTitle={generateThesis}>
            <span>Generate Title</span>
            <span className="ml-4 icofont-print"></span>
          </Button>
          <GeneratedTitle title={thesis.title} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
