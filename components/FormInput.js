export default function FormInput(props) {
  const { label, type, name } = props;
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="input input-sm input-bordered w-full max-w-xs"
      />
    </div>
  );
}
