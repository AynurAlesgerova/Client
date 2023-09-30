
const HorizontalProgressBar = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;
//   const [progress, setProgress] = useState(50);

//   useEffect(() => {
//     // Simulate progress update
//     const interval = setInterval(() => {
//       if (progress < 100) {
//         setProgress(progress + 10);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [progress]);
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default HorizontalProgressBar;