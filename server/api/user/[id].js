import users from '@/public/users.json';

export default defineEventHandler(event => {
  const id = getRouterParam(event, 'id');
  return users.find(user => user.id === parseInt(id)) || {};
});