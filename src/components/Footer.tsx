import logoRocket from '../assets/Logo-rockeat.svg';

export function Footer() {
    return (
        <div className="flex justify-between leading-7 p-6 border-t border-t-gray-500">
            <div className="flex gap-6">
                <img src={logoRocket} alt="" />
                <span>
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>
            <div>
                <span>
                    Políticas de privacidade
                </span>
            </div>
        </div>
    )
}