import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  centered = false,
}) => {
  const style: React.CSSProperties = centered
    ? { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }
    : {};

  return (
    <div style={style}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
