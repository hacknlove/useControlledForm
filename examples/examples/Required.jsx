import useKMF from 'kissmyform';
import styles from '../styles/Home.module.css';

function beforeChange({ name, value, errors }) {
  if (!value) {
    errors[name] = 'Required';
  } else {
    delete errors[name];
  }
}

export default function BasicExample({ onSubmit }) {
  const { inputControl, handleSubmit, state: { errors } } = useKMF({ beforeChange });

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <input {...inputControl('username')} className={errors.username ? styles.hasError : ''} />
        { errors.username && <p className={styles.error}> Enter your username </p>}
      </div>
      <div className={styles.field}>
        <input {...inputControl('password')} type="password" className={errors.password ? styles.hasError : ''} />
        { errors.password && <p className={styles.error}> Enter your password </p>}
      </div>
      <button> Login </button>
    </form>
  );
}