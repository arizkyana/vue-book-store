import routing from '@/constant/routing';

export default (app, inject) => {
  inject('useRouting', routing);
}