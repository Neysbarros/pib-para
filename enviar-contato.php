<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Altere estes endereços para definir quem recebe e quem aparece como remetente.
const EMAIL_DESTINATARIO = 'waldiney.barros@fapespa.pa.gov.br';
const EMAIL_REMETENTE = 'waldiney.barros@fapespa.pa.gov.br';

function respond(int $status, bool $success, string $message): never
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Método não permitido.');
}

if (!empty($_POST['website'])) {
    respond(200, true, 'Mensagem enviada com sucesso!');
}

$nome = trim(strip_tags((string) ($_POST['nome'] ?? '')));
$email = trim((string) ($_POST['email'] ?? ''));
$assunto = trim(strip_tags((string) ($_POST['assunto'] ?? '')));
$mensagem = trim(strip_tags((string) ($_POST['mensagem'] ?? '')));

if ($nome === '' || $email === '' || $assunto === '' || $mensagem === '') {
    respond(422, false, 'Preencha todos os campos obrigatórios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Informe um e-mail válido.');
}

if (preg_match('/[\r\n]/', $email) || preg_match('/[\r\n]/', $assunto)) {
    respond(422, false, 'Os dados informados são inválidos.');
}

if (mb_strlen($nome) > 120 || mb_strlen($email) > 160 || mb_strlen($assunto) > 160 || mb_strlen($mensagem) > 5000) {
    respond(422, false, 'Um ou mais campos ultrapassaram o tamanho permitido.');
}

$titulo = 'PIB do Pará — ' . $assunto;
$corpo = "Nova mensagem enviada pelo portal PIB do Pará.\n\n"
    . "Nome: {$nome}\n"
    . "E-mail: {$email}\n"
    . "Assunto: {$assunto}\n\n"
    . "Mensagem:\n{$mensagem}\n";
$cabecalhos = [
    'From: Portal PIB do Pará <' . EMAIL_REMETENTE . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

if (!mail(EMAIL_DESTINATARIO, $titulo, $corpo, implode("\r\n", $cabecalhos))) {
    respond(500, false, 'Não foi possível enviar a mensagem agora. Tente novamente mais tarde.');
}

respond(200, true, 'Mensagem enviada com sucesso!');