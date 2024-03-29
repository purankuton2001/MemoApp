import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateError(code) {
  const message = {
    title: 'エラー',
    description: '時間をおいてもう一度やり直してください',
  };

  switch (code) {
    case 'auth/invalid-email': message.description = 'メールアドレスが不正です。'; break;
    case 'auth/user-disabled': message.description = 'ユーザーが無効です。'; break;
    case 'auth/user-not-found': message.description = 'ユーザーが見つかりません。'; break;
    case 'auth/wrong-password': message.description = 'パスワードが間違っています。'; break;
    case 'auth/email-already-in-use': message.description = 'このメールアドレスは既に使われています。'; break;
    case 'auth/operation-not-allowed': message.description = 'メールアドレス又はパスワードが不正です。'; break;
    case 'auth/weak-password': message.description = 'パスワードが簡単すぎます。'; break;
    default:
  }
  return message;
}
