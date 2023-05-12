import { Notifications } from '@mantine/notifications';

export default (text, color) => {
  return Notifications.show({
    title: text,
    message: '',
    autoClose: 2500,
    withcloseButton: true,
    color: color,
  });
};
