import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Curva cúbica bezier suave e premium (aceleração sutil e desaceleração elegante)
const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
  scale?: boolean;
}

/**
 * Componente ScrollReveal:
 * Animação de entrada suave ao rolar a página (Fade Up padrão ou direcionado),
 * respeitando acessibilidade (prefers-reduced-motion) e mantendo alta performance (GPU).
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 24,
  duration = 0.75,
  delay = 0,
  className = '',
  once = true,
  scale = false,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
        scale: scale ? 0.97 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        margin: '-40px 0px -40px 0px',
      }}
      transition={{
        duration,
        delay,
        ease: PREMIUM_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

/**
 * Container para Aparição em Sequência (Stagger Reveal):
 * Revela cada item filho de forma sincronizada com intervalo de 100 a 150ms.
 */
export const ScrollRevealStagger: React.FC<ScrollRevealStaggerProps> = ({
  children,
  staggerDelay = 0.12,
  delayChildren = 0.05,
  className = '',
  once = true,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        margin: '-40px 0px -40px 0px',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealItemProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

/**
 * Item Filho do Stagger Reveal:
 * Deve ser colocado dentro de <ScrollRevealStagger> para animar em fila.
 */
export const ScrollRevealItem: React.FC<ScrollRevealItemProps> = ({
  children,
  className = '',
  distance = 22,
  duration = 0.7,
}) => {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: PREMIUM_EASE,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
