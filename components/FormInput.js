export default function FormInput({ label, type, name, value, handleChange }) {
  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        required
        className="input input-sm input-bordered w-full"
      />
    </div>
  );
}
