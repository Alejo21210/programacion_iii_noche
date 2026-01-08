import { useState, useEffect } from 'react';

export default function CalculadoraTrapecio() {
  const [baseMayor, setBaseMayor] = useState('');
  const [baseMenor, setBaseMenor] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(0);

  useEffect(() => {
    document.title = `Resultado: ${area}`;
  }, [area]);

  const calcularArea = () => {
    const B = parseFloat(baseMayor);
    const b = parseFloat(baseMenor);
    const h = parseFloat(altura);

    if (!isNaN(B) && !isNaN(b) && !isNaN(h)) {
      // AQUÍ ESTÁ EL CAMBIO QUE PEDISTE:
      // Multiplicamos Base Mayor por Base Menor (B * b), entre 2, por altura.
      const resultado = ((B * b) / 2) * h; 
      
      setArea(resultado);
    } else {
      alert("Por favor ingresa números válidos");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Cálculo Especial Trapecio</h3>
      
      <input
        type="number"
        value={baseMayor}
        onChange={(e) => setBaseMayor(e.target.value)}
        placeholder="Base Mayor (BM)"
      />
      <br /><br />
      
      <input
        type="number"
        value={baseMenor}
        onChange={(e) => setBaseMenor(e.target.value)}
        placeholder="Base Menor (Bm)"
      />
      <br /><br />

      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura (h)"
      />
      <br /><br />

      <button onClick={calcularArea}>Calcular</button>
      
      <p>Resultado: {area}</p>
    </div>
  );
}