<?php 

$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = 'password';
$dbName = 'Problemas_Becrownd';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($conexao->connect_errno){
    echo 'ERRO: Falha na conexão com o banco de dados.';
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Cadastro de usuário
    if (isset($_POST['nome'], $_POST['email'], $_POST['senha'])) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);  

        $sql = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";

        if ($conexao->query($sql) === TRUE) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao cadastrar: " . $conexao->error;
        }
    }

    // Login de usuário
    if (isset($_POST['login_email'], $_POST['login_senha'])) {
        $login_email = $_POST['login_email'];
        $login_senha = $_POST['login_senha'];

        $sql = "SELECT senha FROM usuarios WHERE email = '$login_email'";
        $resultado = $conexao->query($sql);

        if ($resultado->num_rows > 0) {
            $usuario = $resultado->fetch_assoc();
            if (password_verify($login_senha, $usuario['senha'])) {
                echo "Login bem-sucedido!";
            } else {
                echo "Senha incorreta!";
            }
        } else {
            echo "Usuário não encontrado!";
        }
    }
}

$conexao->close();
?>
