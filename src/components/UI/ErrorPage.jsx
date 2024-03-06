import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError(); // спец хук для получения данных из loader()
  let title = 'An error occured!';
  let message = 'Somenhing went wrong!';

  if (error.status === 500) {
    message = JSON.parse(error.data).message; // JSON метод используем т.к
    // loader возвращает Response и его надо обработать
  }
  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resourse page';
  }
  return (
    // в зависимости от кода статуса выдаем разное содержимое ошибки
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
